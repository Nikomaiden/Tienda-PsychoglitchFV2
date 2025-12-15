
export function useRouter() {
    // useEffect para bloquear scroll
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // useEffect para cerrar menú en resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                closeMenu();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    // useEffect para tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
        }, [isMenuOpen]);
    useEffect(() => {
        document.title = "PSYCHOGLITCH - Tu tienda de videojuegos y tecnología";
      }, []);
}