import useCollection from "../../../Hooks/useCollection";
import Card from "../../Shared/ItemCard/Card";


const Featured = () => {

    const [collection] = useCollection();
    const featured = collection.filter(item => item.category === 'new & featured')
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
           {
            featured.map(item => <Card
            key={item._id}
            item={item}
            ></Card>)
           }
        </div>
    );
};

export default Featured;