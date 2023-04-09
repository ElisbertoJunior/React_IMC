import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import Result from "./components/Result"


function App() {
  
  const [heightValue, setHeightValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [resultCalc, setResultCalc] = useState('');
  const [resultVisible, setResultVisible] = useState(false)

  const calculateIMC = () => {
    const IMC = weightValue / (heightValue * heightValue);


    if(IMC < 18.5) {
      setResultCalc(`Seu IMC e de ${IMC.toFixed(2)}. Nessa faixa, a pessoa apresenta um peso insuficiente em relação à sua altura, o que pode indicar desnutrição ou outras condições de saúde.`);
    } else if (IMC > 18.5 && IMC < 25.0) {
      setResultCalc(`Seu IMC e de ${IMC.toFixed(2)}. Nessa faixa, a pessoa apresenta um peso saudável em relação à sua altura, o que indica uma boa relação entre massa magra e massa gorda.`);
    } else if (IMC >= 25.0 && IMC < 30.0) {
      setResultCalc(`Seu IMC e de ${IMC.toFixed(2)}. Nessa faixa, a pessoa apresenta um peso acima do considerado saudável em relação à sua altura, o que pode indicar risco aumentado para doenças cardiovasculares, diabetes tipo 2, entre outras.`)
    } else if (IMC >= 30.0 && IMC < 35.0) {
      setResultCalc(`Seu IMC e de ${IMC.toFixed(2)}. Nessa faixa, a pessoa apresenta um excesso de peso significativo em relação à sua altura, o que indica risco elevado para doenças cardiovasculares, diabetes tipo 2, entre outras.`)
    } else if (IMC >= 35.0 && IMC < 40.0) {
      setResultCalc(`Seu IMC e de ${IMC.toFixed(2)}. Nessa faixa, a pessoa apresenta um excesso de peso muito significativo em relação à sua altura, o que indica risco muito elevado para doenças cardiovasculares, diabetes tipo 2, entre outras.`)
    } else {
      setResultCalc(`Seu IMC e de ${IMC.toFixed(2)}. Nessa faixa, a pessoa apresenta um excesso de peso extremo em relação à sua altura, o que indica risco extremamente elevado para doenças cardiovasculares, diabetes tipo 2, entre outras, além de outras complicações de saúde graves.`)
    }

    setResultVisible(true)
  }

  

  return (
    <div className="App">
      <Header/>
      <Form 
        entryHeight='Insira sua altura'
        entryWeight='Insira seu peso'
        setHeight={({target}) => setHeightValue(target.value)}
        setWeight={({target}) => setWeightValue(target.value)}
        calculate={calculateIMC}
      />

      {resultVisible && (
        <Result showResult={resultCalc}/>
      )}
      
    </div>
  )
}

export default App
