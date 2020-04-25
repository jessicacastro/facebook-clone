import React, { Component } from 'react';
import './PostList.css';

import Post from '../post/Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Jessica Castro',
          avatar: 'https://avatars1.githubusercontent.com/u/28007005?s=460&u=df43ba238e9ecb0acdb05bc358c328ea83e91084&v=4'
        },
        date: '25/04/2020',
        content: 'Pessoal, vocês já viram o aplicativo Quarentena Solidária? Fiz junto com uns amigos, ele visa conectar pessoas que precisam com pessoas que querem ajudar! Vamos nessa?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4'
            },
            content: 'Que bacana, Jessica! Que bom que os aprendizados da Rocketseat te inspiraram a participar de algo tão legal!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Thiago Faria',
          avatar: 'https://avatars2.githubusercontent.com/u/797053?s=460&v=4'
        },
        date: '25/04/2020',
        content: 'Galera.. Nessa quarentena a AlgaWorks preparou vários conteúdos legais de desenvolvimento para liberar para vocês, querem saber mais?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4'
            },
            content: 'Que legal, Thiago! A RocketSeat está inovando esse ano. Temos a meta de sermos um dos maiores geradores de conteúdo para os nossos alunos. Bora codar!'
          },
          {
            id: 2,
            author: {
              name: 'Marcos Bruno',
              avatar: 'https://avatars3.githubusercontent.com/u/4096456?s=460&v=4'
            },
            content: 'Bacana! A Collab Code tem gerado bastante conteúdo visando o front-end também! Vamos juntos nessa caminhada ajudando nessa quarentena.'
          },

        ]
      },
      {
        id: 3,
        author: {
          name: 'Marcos Bruno',
          avatar: 'https://avatars3.githubusercontent.com/u/4096456?s=460&v=4'
        },
        date: '25/04/2020',
        content: 'Fala pessoal! A minha live de desenvolvedor front-end começa hoje às 20h.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Jessica Castro',
              avatar: 'https://avatars1.githubusercontent.com/u/28007005?s=460&u=df43ba238e9ecb0acdb05bc358c328ea83e91084&v=4'
            },
            content: 'Que legal! Vou participar! Não vejo a hora! Além das suas lives, venho estudando no GoStack e creio que ambos me ajudarão a crescer profissionalmente.'
          }
        ]
      }
    ]
  }

  render() {
    return(
      <ul>
        {this.state.posts.map(post =>
            <Post 
              key={post.id}
              data={post}/>
        )}
      </ul>
    );
  };
}

export default PostList;