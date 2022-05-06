type Props = {
  text: string
}

function Button({ text }: Props) {
  return <button>{text}</button>
}

function App() {
  return <Button text='hello world' />
}

export default App
