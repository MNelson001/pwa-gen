import Nav from './nav';

const GlobalLayout = ({ children }) => (

    <div className="global-container">
        <Nav />
        <div className="global-content-wrapper">{children}</div>

        <style jsx global>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
                height: 100%;
                scroll-behavior: smooth;
            }

            body {
                margin: 0px;
            }

            .nav__menu {
                height: 100%;
                width: 50%;
                background: #3d3d3d;
                position: fixed;
                right: 0;
                z-index: -1;
            }

            svg {
                max-height: 100%;
            }
        `}</style>
    </div>

)

export default GlobalLayout;