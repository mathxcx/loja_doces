import CategoriaDoce from "../Models/CategoriaDoce.js";

class CatDoceControllerDoceController{
    constructor(){
        this.categoria_doces = [
            {nome_categoria:"Bolos"},
            {nome_categoria:"Tortas"},
            {nome_categoria:"Doces Finos"},
            {nome_categoria:"Doces Tradicionais"}
        ];
    }
    create(req,res){
        const nome_categoria = req.body.nome_categoria;
        CategoriaDoce.create(nome_categoria).then(
            resposta =>{
                console.debug("Inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao Inserir Doce");
                res.status(resposta[0]).json(resposta[1])

            }    
        )

    }


    read(req,res){
        CategoriaDoce.read().then(
            resposta =>{
                console.debug("Mostrando Doces");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao mostrar doces");
                console.debug(resposta);
                res.status(resposta[0]).json(resposta[1])

            }    
        );

    }


    update(req,res){
        const id_categoria = req.params.id_parafuso;
        const nome_categoria = req.body.nome_categoria;

        CategoriaDoce.update(id_categoria,nome_categoria).then(
            resposta =>{
                console.debug("Atualizando Categoria de Doces")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta=>{
                console.debug("Erro ao atualizar as categorias")
                res.status(resposta[0]).json(resposta[1])
            }

        );

    }

    delete(req,res){
        const id_categoria = req.params.id_categoria;
        const nome_categoria = req.body.nome_categoria;

        CategoriaDoce.delete(id_categoria,nome_categoria).then(
            resposta=>{
                console.debug("Deletando Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro ao deletar categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        );

        
    }
}
 
export default new CatDoceController();