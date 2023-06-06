export const ArrayIter=()=>{
    const carData=[
        {
            brand:"VEGA",
            manuYear:"2022",
            origin:"SriLanka"
        },
        {
            brand:"BMW",
            manuYear:"2022",
            origin:"USA"
        },
        {
            brand:"Benz",
            manuYear:"2022",
            origin:"Germany"
        }
    ]

    return carData.map((data)=>(

        <div>
            <ul>
                <li>{data.brand}</li>
                <li>{data.manuYear}</li>
                <li>{data.origin}</li>
            </ul>
        </div>

    ));

}