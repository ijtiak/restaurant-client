import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
// import useMenu from "../../../hooks/useMenu";

import { useEffect, useState } from "react";


// const PopularMenu = () => {
//     const [menu] = useMenu();
//     const popular = menu.filter(item => item.category === 'popular');

//     return (
//         <section className="mb-12">
//             <SectionTitle
//                 heading="From Our Menu"
//                 subHeading="Popular Items"
//             ></SectionTitle>
//             <div className="grid md:grid-cols-2 gap-10">
//                 {
//                     popular.map(item => <MenuItem
//                         key={item._id}
//                         item={item}
//                     ></MenuItem>)
//                 }
//             </div>
//             <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
//         </section>
//     );
// };

// export default PopularMenu;











const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
                ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button style={{marginLeft: "446px"}} className="btn btn-outline border-b-4 mt-4 ml-auto">View Full Menu</button>
        </section>
    )
}

export default PopularMenu;