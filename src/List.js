import "./List.css"
export default function List({itemList,updateItemList}){
   let deleteFromList=key=>{
       let newList=itemList.filter(itemObj=>{
           return itemObj.key!==key
       })

       updateItemList(newList)

   }
    console.log(itemList);
    return(
    <>
        {itemList.map((itemObj,index)=>{
        return( 
        <div key={index} className="item">
            <p >{itemObj.item}</p>
            <button onClick={()=>deleteFromList(itemObj.key)}>X</button>
        </div> )
        })}
    </>)
}
