export default function ItemPage(props){

    return (
            <main className="flex flex-col space-y-6 lg:space-y-0 p-6 items-center lg:grid grid-cols-3 ">
                    
                    
                    <section className="shadow-lg lg:h-full lg:p-4 ">
                        <img  src={props.image} alt=""/>
                        
                    </section>



                    <section className="shadow-md w-full p-4 lg:h-full col-span-2 ">
                        <h1 className="text-3xl text-center font-semibold leading-8 lg:text-left lg:leading-loose">{props.name}<br />  </h1 >
                        <hr></hr>
                        <p className="p-2 text-lg lg:text-xl  lg:w-1/2 lg:leading-loose" > {props.desc} </p>
                        <hr></hr>
                        <p className="text-center font-semibold text-xl lg:text-2xl pt-2 lg:text-left lg:pl-6 w-1/2 lg:leading-loose">{props.price}</p>
                        <form className="flex gap-2 justify-center lg:justify-start p-2">
                            <button className="bg-emerald-400 text-xl lg:text-2xl  rounded-sm py-2 font-semibold px-6 ">Add To Cart</button>


                                <select className="px-3">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                            </form>

                    </section>
                
            </main>
        
    )
}