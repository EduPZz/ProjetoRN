import { conexaoFS } from './conexaoFB';

export class AlunoFB{
    
    constructor() {
    this.state = {
      alunos: conexaoFS.collection('Alunos'),
    };
  }

    pegarAlunos(){
        return this.state.alunos;
    }

    adicionarAluno(aluno){
        this.state.alunos.add(aluno);
    }

    editarAluno(aluno){
        const {id} = aluno; 
        delete aluno.id;

        this.state.alunos.doc(id).update(aluno);
    }    

    removerAluno(aluno){
        this.state.alunos.doc(aluno.id).delete();
    }
}