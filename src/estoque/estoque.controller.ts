import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { ProdutoDTO } from './dto/Produto.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) { }

  @Post() //adicionar novo produto
  async create(@Body() data: ProdutoDTO) {
    return this.estoqueService.create(data);
  }

  @Get() //listar estoque
  async findAll() {
    return this.estoqueService.findAll();
  }

  @Get('carrinho')
  async showCart() {
    return this.estoqueService.mostrarCarrinho();
  }

  @Get('/carrinho/total')
  async closeCart() {
    return this.estoqueService.concluirCarrinho();
  }

  @Get('/produto/:codigo')
  async searchCode(@Param('codigo') codigo: string) {
    return this.estoqueService.procurarCodigo(codigo);
  }

  @Get('/nome/:nome')
  async searchName(@Param('nome') nome: string) {
    return this.estoqueService.procurarNome(nome);
  }

  @Get('/categoria/:categoria')
  async searchCategory(@Param('categoria') categoria: string) {
    return this.estoqueService.procurarCategoria(categoria);
  }

  @Put('/valor/:codigo')
  async updateCode(@Param('codigo') codigo: string, @Body() data: ProdutoDTO) {

    return this.estoqueService.mudarPreco(codigo, data);

  }

  @Put('/carrinho/:id')
  async addCart(@Param('id') id: string) {
    return this.estoqueService.adcCarrinho(id);
  }

  @Put('/carrinho/remove/:id')
  async removeCart(@Param('id') id: string) {
    return this.estoqueService.removeCarrinho(id);
  }

  @Put('/nome/:codigo')
  async updateName(@Param('codigo') codigo: string, @Body() data: ProdutoDTO) {

    return this.estoqueService.mudarNome(codigo, data);

  }


  @Delete('all')
  async deleteAll() {
    return this.estoqueService.deletarTudo();
  }

  @Delete(':id')
  async deleteId(@Param('id') id: string) {
    return this.estoqueService.deletarId(id);
  }

  @Delete('/produto/:codigo')
  async deleteCode(@Param('codigo') codigo: string) {
    return this.estoqueService.deletarProduto(codigo);
  }







  // @Delete(':id')
  // async remove(@Param('id') id: string) {

  //   return

  // }

  // @Delete(':codigo')
  // async delete(@Param('codigo') codigo: string) {

  //   return this.estoqueService.deletarTudo(codigo);

  // }

  // @Get(':id') //
  // findOne(@Param('id') id: number) {
  //   return this.estoqueService.findOne(+id);
  // }

  //   @Patch(':id')
  //   update(@Param('id') id: number, @Body() data: UpdateEstoqueDto) {
  //     return this.estoqueService.update(+id, updateEstoqueDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.estoqueService.remove(+id);
  //   }
}
