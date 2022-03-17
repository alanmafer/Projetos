import { useState } from 'react';
import styles from './App.module.css';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';

import {levels, calculateImc, Level} from './helpers/imc'

const App = () => {
  const [campoAltura, setAltura] = useState<number>(0);
  const [campoPeso, setPeso] = useState<number>(0);
  const [mostrarItem, setMostrarItem] = useState<Level | null>(null);

  const btnCalcular = () => {
    if (campoAltura && campoPeso) {
      setMostrarItem(calculateImc(campoAltura, campoPeso));
    } else {
      alert ("Preencha todos os campos.")
    }
  }

  const btnVoltar = () => {
    setMostrarItem(null);
    setAltura(0);
    setPeso(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
         
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso de cada pessoa.</p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value = {campoAltura > 0 ? campoAltura : ''}
            onChange = {e => setAltura(parseFloat(e.target.value))}
            disabled={mostrarItem ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value = {campoPeso > 0 ? campoPeso : ''}
            onChange = {e => setPeso(parseFloat(e.target.value))}
            disabled={mostrarItem ? true : false}
          />

          <button onClick={btnCalcular} disabled={mostrarItem ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!mostrarItem && 
            <div className={styles.grid}>
              {levels.map((item, key)=> (
                <GridItem  key={key} item={item}/>
              ))}
            </div>
          }
          {mostrarItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={btnVoltar}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={mostrarItem}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;