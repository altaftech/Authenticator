import React from 'react';
class Mapdemo extends React.Component {
    render() {
        var Programming = ["car1", "car2", "car3"];
        return (
            <>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Programming.map((value, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td> {value}</td>
                                <td><img width={100}
                                    src={`https://source.unsplash.com/random/800x600?pizza&${index}`} alt='car'/></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}
export default Mapdemo;

// import React from 'react';
// function Mapdemo() {
// const [mydata,setData] = React.useState([])
// const [txt1,setTxt1] = React.useState("")
// const addData = () =>{
// var olddata = mydata; //Get MyData
// olddata.push(txt1); //Add Txt1
// setData(olddata); //Update MyData
// setTxt1(""); //Clear Txt1
// }
// return (<>
// <input type="text" value={txt1} onChange={(e)=>setTxt1(e.target.value)}/>
// <input type='button' value="ClickMe" onClick={addData}/>
// {mydata.map((v,i)=>{
// return <li key={i}>{v}</li>
// })}
// </> );
// }
// export default Mapdemo;