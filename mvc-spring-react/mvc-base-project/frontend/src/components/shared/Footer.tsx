import IGithub from "assets/img/github.png"
import IGmail from "assets/img/email.png"

function Footer() {
    const links = {
        github: "https://github.com/pacifcode",
        email: "mailto:pacifcode@gmail.com"
    }

    return (
            <footer className="container row ld-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-2 d-flex align-items-center">
                    <span className="text-muted">Base Project 2024</span>
                </div>

                <ul className="nav col-10 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><b>Contato:</b></li>
                    <li className="ms-3">
                        <a className="text-muted" href={links.github} color="inherit">
                            <img width="24" height="24" src={IGithub}/>
                            GitHub
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href={links.email}>
                            <img width="24" height="24" src={IGmail}/>
                            Email
                        </a>
                    </li>
                </ul>
            </footer>
    );
}

export default Footer;