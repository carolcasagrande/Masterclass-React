import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/carolcasagrande.png" alt="Caroline Casagrande" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?" 
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}

// preventDefault previne o comportamento padrão do evento. Por ex, ao clicar no botão do formulário e dar um submit, automaticamente redireciona para outra tela e para evitar esse comportamento, adiciona preventDefault. (JS)

// Controlled Components - comportamento de já anotar o valor enquanto o usuário digita

// estado - variáveis que o react monitora. sempre que o valor dessas variáveis for alterado, o react vai 'reagir' a essa alteração. 
// O useState não retorna apenas a variável, ele retorna 2 informações dentro do array, então é usado a desestruturação do JS 
// const [info1, info2] = useState(estado inicial);
// info1 é a variável e a info2 = 'setInfo1' é uma função para atualizar o valor da variavel info1

// quando eu seto apenas a variável newTweet, o setTweets apenas substituiria a variável tweets por newTweet desconsiderando todos os itens do Array,
// mas como eu quero adicionar um novo tweet na lista, eu devo utilizar '...(spread operator)´ que mantém todos os itens anteriores da lista + o novo como abaixo
// Por exemplo: setTweets([...tweets, newTweet]) - aqui estou criando um novo array, copiando os itens da variável anterior e adicionando um novo item na lista
// imutabilidade - você nunca altera informações no react, você cria novas versões da variável inicial