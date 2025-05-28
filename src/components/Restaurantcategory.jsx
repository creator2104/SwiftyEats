import ItemList from "./ItemList";

// contolled component
// accordian is being controlled by restaurantmenu 
// lifting the state up
const Restaurantcategory = ({data , ShowItems , setShowIndex , dummy}) => {
  const handleClick = () => {
   setShowIndex();
  }
  {/* Header */}
  {/* Accordian Body */}
  
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg  hover:bg-gray-100 transition-colors duration-200">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-medium text-lg">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
      { ShowItems && <ItemList items={data.itemCards} dummy={dummy}/>}
      {/* i wanna give the power to restaurantmenu bcz we wanna build the feature of collapsing if any other accordian will be clicked other all accordians should be clicked */}
      </div>
    </div>
  )
}

export default Restaurantcategory;
