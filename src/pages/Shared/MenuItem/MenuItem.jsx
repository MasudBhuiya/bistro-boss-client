

const MenuItem = ({item}) => {
    const {name, recipe, price, image} = item;
    return (
        <div className="flex  space-x-3 p-3">
            <img className="w-[100px] h-[100px] rounded-full" style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}---------------</h3>
                <p>{recipe}</p>
            </div>
                <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;