import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 2em 0;
    background: var(--dark);
    border-bottom: 1px solid #333;
    z-index: 30;
    outline: 0;

    @media (max-width: 550px) {
        padding: 1em 0;
    }

    .skip-content-link {
        background-color: var(--primary-200);
        background-image: linear-gradient(90deg, var(--primary-200), var(--secondary));
        font-size: 0.75em;
        padding: 1em 1.5em;
        color: white;
        font-weight: 800;
        text-decoration: none;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        position: absolute;
        top: 2em;
        left: 2em;
        transform: translateY(-8em);
        transition: transform 250ms ease;
        z-index: 2;

        @media (max-width: 550px) {
            top: 1em;
            padding: 0.8em 1.25em;
        }

        &:focus {
            transform: translateY(0);
            outline: 3px dotted var(--primary-100);
            outline-offset: 0.5em;
        }
    }

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        text-transform: uppercase;
        font-weight: 800;
        font-size: var(--body-sm);

        @media (max-width: 550px) {
            font-size: var(--body-xs);
        }

        & > li + li {
            margin-left: 3em;

            @media (max-width: 550px) {
                margin-left: 2em;
            }
        }

        a {
            color: inherit;
            text-decoration: none;
            position: relative;

            &:hover,
            &:focus {
                outline: none;
                color: var(--primary-100);
            }

            &:hover::before,
            &:focus::before {
                content: '';
                height: 5px;
                background-image: linear-gradient(45deg, var(--primary-100), var(--secondary));
                position: absolute;
                bottom: -0.5em;
                left: 0;
                right: 0;

                @media (max-width: 550px) {
                    height: 3px;
                }
            }
        }

        button {
            cursor: pointer;
            font-size: inherit;
            padding: 0;
            background: transparent;
            border: none;
            color: inherit;
            text-decoration: none;
            position: relative;

            &:hover,
            &:focus {
                outline: none;
                color: var(--primary-100);
            }

            &:hover::before,
            &:focus::before {
                content: '';
                height: 5px;
                background-image: linear-gradient(45deg, var(--primary-100), var(--secondary));
                position: absolute;
                bottom: -0.5em;
                left: 0;
                right: 0;

                @media (max-width: 550px) {
                    height: 3px;
                }
            }
        }
    }
`;
