import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Navigation({ setNav }) {
  const router = useRouter();

  useEffect(() => {
    // Feche o menu móvel quando a rota mudar
    setNav(false);
  }, [router.asPath]);

  return null; // Este componente não renderiza nada
}
