interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text || 'ol'}</button>
}

function App() {
  return (
    <>
      <Button text="ola"/>
      <Button />
    </>
  )
}

export default App
