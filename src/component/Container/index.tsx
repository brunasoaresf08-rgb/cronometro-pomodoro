import styles from './styles.module.css';

//Configurar o props
// Configurar o React.Mode

// type é como um objeto, define o formato dos dados
type ContainerProps = {
    // Representa o conteúdo renderizável (aparecerá na tela)
    children: React.ReactNode;
}
                // chama children de ContainerProps
export function Container({children}:ContainerProps) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    );
}