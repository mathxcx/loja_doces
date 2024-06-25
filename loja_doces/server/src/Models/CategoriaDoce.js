import mysql from "mysql2";
import config from "../Config.js";

class CategoriaDoce{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome_categoria){
        let sql = `insert into categoria_doces (nome_categoria) values("${nome_categoria}");`;

        return new Promise((resolve,reject)=>{

            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                
                }

                resolve([201,"Categoria Adicionada"])
            })
c

        });


    }
    
    read(){
        let sql = `select * from categoria_doces;`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200,retorno])


            })
        });
    
    }

    update(id_categoria,nome_categoria){
        let sql = `update categoria_doces set nome_categoria="${nome_categoria}" where id_categoria="${id_categoria}"`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if(retorno.affectedRows>0){
                    resolve([200,"Categoria Atualizada"])
                }else{
                    resolve([404, "Categoria não encontrada"])
            }

            })

    });
        
 }

    delete(id_categoria){
        let sql = `delete from categoria_doces where id_categoria="${id_categoria}"`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if(retorno.affectedRows>0){
                    resolve([200,"Categoria Deletada"])
                }else{
                    resolve([404, "Categoria não deletada!"])
            }

            })

    });
        

    }
}

export default new CategoriaDoce();