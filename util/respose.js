module.exports=(res,error=null,data)=>{
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