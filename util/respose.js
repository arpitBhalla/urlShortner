module.exports=(res,data,error=false)=>{
    if(error){
        res.send({
            success:false,
            data:error
        })
    }else if(!data){
        res.send({
            success:false,
            data:null
        })
    }else{
        res.send({
            success:true,
            data
        })
    }
}