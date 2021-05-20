import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({

    // Definição dos dados armazenados dentro no B.D fictício do Mirage
    models: {
      // user => como se fosse uma tabela no B.D
      // Partial<User> => p/ ser salvo precisa conter os campos da tipagem "User"
      // mas não obrigatoriamente todos os campos, por isso Partial (parcial)
      user: Model.extend<Partial<User>>({})
    },

    /**
     * Formas de gerar dados em "massa", ao invés dentro do seed() 
     * criar um conjunto de dados por vez (exemplo dados de "user")
     */
    factories: {
      // Passa o nome do model, no caso "user"
      user: Factory.extend({
        // Cada um dos campos que tenho dentro do Model, passo como um método
        // i => indice
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        created_at() {
          return faker.date.recent(10)
        }
      })
    },

    // Geração alguns dados ficticios assim que o servidor Mirage inicializar
    seeds(server) {
      // Gerando dados com Factories, passando (nomeFactory, qtdadeDeDados)
      server.createList('user', 200);
    },

    // Quais rotas terão dentro do Mirage
    routes() {
      // Setar o caminho p/ aplicação poder chamar as rotas do Mirage
      // Exemplo: /apimirage/users
      this.namespace = 'apimirage';

      // Seta o tempo de qlqr requisição feito no Mirage demore 750ms
      // Testar os carregamentos, loading, etc.
      this.timing = 750;

      // Forma automatizada (shorthands - documentação) de um CRUD simples
      this.get('/users');
      this.post('/user');

      /**
       * Verifica todas as chamadas feitas para o endereço /apimirage
       * passem pelo mirage, e caso não for detectadas as rotas, seguem adiante
       */
      this.passthrough();
    }
  })

  return server
}