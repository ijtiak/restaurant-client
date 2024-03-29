import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {

    return (
        title !== 'offered' ?
            <div className='pt-8'>
                <Cover img={img} title={title}></Cover>
                <div className="grid md:grid-cols-2 gap-10 my-16">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/${title}`}>
                    <button style={{ marginLeft: "460px" }} className="btn btn-outline border-b-4 -mt-4 mb-4">Order Now</button>
                </Link>
            </div>
            :
            <div className='pt-8'>
                <div className="grid md:grid-cols-2 gap-10 my-16">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/${title}`}>
                    <button style={{ marginLeft: "460px" }} className="btn btn-outline border-b-4 -mt-4 mb-4">Order Now</button>
                </Link>
            </div>
    );
};

export default MenuCategory;