import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  // Precisa ser um elemento React (Componente React)
  children: ReactElement;
  shouldMatchExactHref: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {

  const { asPath } = useRouter();
  // Variável p/ verificar se está ativo
  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  // Verificação se começa com inicio da rota passada
  if (!shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as)))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}