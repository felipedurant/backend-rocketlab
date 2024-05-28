import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from './dto/Produto.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class EstoqueService {
  constructor(private prisma: PrismaService) { }

  async create(data: ProdutoDTO) {

    return await this.prisma.produto.create({ data });

  }

  async findAll() { //lista o estoque
    return await this.prisma.produto.findMany();
  }

  async procurarCodigo(codigo: string) {
    return await this.prisma.produto.findFirst({
      where: {
        codigo: { contains: codigo }
      }
    })
  }

  async procurarCategoria(categoria: string) {
    return await this.prisma.produto.findMany({
      where: {
        categoria: { contains: categoria }
      }
    })
  }

  async mostrarCarrinho() {
    return await this.prisma.produto.findMany({
      where: {
        carrinho: "y"
      }
    })
  }

  async concluirCarrinho() {
    return await this.prisma.produto.groupBy({
      by: ['carrinho'],
      where: {
        carrinho: "y"
      },
      _sum: {
        valor: true,
      }
    })
  }



  async procurarNome(nome: string) {
    return await this.prisma.produto.findFirst({
      where: {
        nome: nome
      }
    })
  }

  async mudarPreco(codigo: string, data: ProdutoDTO) {
    return await this.prisma.produto.updateMany(
      {
        where: {
          codigo: { contains: codigo, }
        },
        data: {
          valor: {
            set: data.valor,
          },
        },
      })
  }

  async adcCarrinho(id: string) {
    return await this.prisma.produto.update({
      where: {
        id: id
      },
      data: { carrinho: 'y' }
    })
  }

  async removeCarrinho(id: string) {
    return await this.prisma.produto.update({
      where: {
        id: id
      },
      data: { carrinho: 'n' }
    })
  }



  async mudarNome(codigo: string, data: ProdutoDTO) {
    return await this.prisma.produto.updateMany(
      {
        where: {
          codigo: { contains: codigo, }
        },
        data: { nome: data.nome },
      })
  }

  async deletarTudo() {
    return await this.prisma.produto.deleteMany({})
  }

  async deletarId(id: string) {
    const produtoExiste = await this.prisma.produto.findUnique({
      where: { id },
    });

    if (!produtoExiste) {
      throw new Error("Produto não existe");
    }

    return await this.prisma.produto.delete({
      where: { id, },
    })
  }

  async deletarProduto(codigo: string) {
    return await this.prisma.produto.deleteMany(
      {
        where: {
          codigo: codigo
        },
      })
  }


  //   if (!produtoExiste) {
  //     throw new Error('Book does not exists!');
  //   }

  //   return await this.prisma.produto.delete({
  //     where: {
  //       codigo,
  //     },
  //   });
  // }



  // async contarEstoque(data: ProdutoDTO) {


}
