import React from "react";

export default function Error({ error }) {
  return <div className="text-red-600">{error}</div>;
}
// import React from 'react';

// export default class ProductionDash extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//           information:[],
//           supplier:[],
//           activity:[],
//           infoerror:false,
//           supplyerror:false,
//           activityerror:false
//       }
//     }
//     componentDidMount()
//     {

//       let urlId = this.props.match.params.id;

//       getInformation(token,productionId).then(data=>{

//         if(data.error){
//           this.setState({infoerror:data.error,});
  
//         }
//         else{
//           this.setState({information:data.informations});
         
          
//         }
//      }).catch(err=>{console.log(err)});
     
  
//      getSupplier(token,productionId).then(data=>{
//          if(data.error){
//           this.setState({supplyerror:data.error});
  
//          }
//          else{
//           this.setState({supplier:data.suppliers});
  
//          }
//      }).catch(err=>{console.log(err)})
  
//       getActivity(token,productionId).then(data=>{
//           if(data.error){
//             this.setState({activityerror:data.error});
  
//           }
//           else{
//             this.setState({activity:data.activities});
              
//           }
//       }).catch(err=>{console.log(err)})
  
//     }
//     render() {
//         return (
//             <div className="content">
                
//             </div>
//         );
//     }
// }




