import './SideBar.scss';
import { RiSearch2Line } from "react-icons/ri";

const SideBar = ({ setSearchTerm }) => {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Atualiza o termo de pesquisa com o valor do input
    };

    return (
        <aside className="container-side">
            <div>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    className="search" 
                    placeholder="Faça uma busca..." 
                    onChange={handleSearchChange} // Chamando a função ao mudar o valor do input
                />
                <RiSearch2Line className='search-icon' />
            </div>
        </aside>
    );
}

export default SideBar;
