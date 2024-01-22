import { Funcionarios } from "./funcionario.models";

export class Departamentos {
  public id!: number;
  public nome!: string;
  public sigla!: string;
  public ativo!: boolean;
  public funcionarios!: Funcionarios[];
}
