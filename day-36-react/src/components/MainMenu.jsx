import SubMenu from "./SubMenu";
import { Navbar } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import menus from '../data/menus'

export default function MainMenu() {

    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
            />
        )
    })

    return (
        <div>
            <div>Here is the main menu</div>

            <Navbar bg="light" expand='lg'>
                {subMenus}
            </Navbar>


        </div>
    )
}


