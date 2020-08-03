import React from 'react'
import { SimpleTable } from 'react-table-web'
import 'react-table-web/dist/index.css'

const data = [
  { "Dessert": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich ", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "Dessert": "Ice cream sandwich", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 }

  /*{ "S.No": 2, "Ice cream sandwich	": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 3, "Eclair": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 4, "Cupcake": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 5, "Gingerbread": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 6, "Dessert": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 7, "Ice cream sandwich	": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 8, "Eclair": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 9, "Cupcake": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 },
  { "S.No": 10, "Gingerbread": "Frozen yoghurt", "Calories": 159, "Fat": 6, "Carbs": 24, "Protein": 4 }*/
]


const result = { 'count': 1, 'option': ['10', '20', '50', '100'], 'show': true }
const filterProps = {
  show: true,
  fields: [
    { fieldName: "First Name", type: "text", value: "", stateKey: 'fname' },
    { fieldName: "Second Name", type: "select", option: ['india', 'Aus', 'Eng'], value: "", stateKey: 'sname' },
  ]
}

const App = () => {
  return <div>
    <SimpleTable
      data={data}
      selectOption={true}
      search
      filter={filterProps}
      result={result}
    />

  </div>
}

export default App
