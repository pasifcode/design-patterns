import IGithub from "assets/img/github.png"
import IGmail from "assets/img/email.png"

function Footer() {
    const links = {
        github: "https://github.com/pacifcode",
        email: "mailto:pacifcode@gmail.com"
    }

    return (
            <footer className="container ld-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">Base Project 2024</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href={links.github} color="inherit">
                            <img width="24" height="24" src={IGithub}/>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href={links.email}>
                            <img width="24" height="24" src={IGmail}/>
                        </a>
                    </li>
                </ul>
            </footer>
    );
}

export default Footer;