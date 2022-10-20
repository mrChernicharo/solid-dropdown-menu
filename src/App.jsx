import Dropdown from "./Dropdown";
import DropdownMenu from "./DropdownMenu";

function App() {
  const dropdownOptions = [
    { text: "option A", value: "A", options: null },
    { text: "option B", value: "B", options: null },
    { text: "option C", value: "C", options: null },
    { text: "option M", value: "Mango!", options: null },
  ];

  const dropdownMenuOptions = [
    { depth: 1, text: "option A", value: "A", options: null },
    { depth: 1, text: "option B", value: "B", options: null },
    {
      depth: 1,
      text: "option C",
      value: "C",
      options: [
        { depth: 2, text: "option C1", value: "C1", options: null },
        { depth: 2, text: "option C2", value: "C2", options: null },
        {
          depth: 2,
          text: "option C3",
          value: "C3",
          options: [
            {
              depth: 3,
              text: "option C3A",
              value: "C3A",
              options: null,
            },
            {
              depth: 3,
              text: "option C3B",
              value: "C3B",
              options: null,
            },
            {
              depth: 3,
              text: "option C3C",
              value: "C3C",
              options: null,
            },
          ],
        },
        {
          depth: 2,
          text: "option C4",
          value: "C4",
          options: [
            {
              depth: 3,
              text: "option C4a",
              value: "C4a",
              options: null,
            },
          ],
        },
        {
          depth: 2,
          text: "option C5",
          value: "C5",
          options: [
            {
              depth: 3,
              text: "option C5a",
              value: "C5a",
              options: null,
            },
            {
              depth: 3,
              text: "option C5b",
              value: "C5b",
              options: [
                {
                  depth: 4,
                  text: "option C5b1",
                  value: "C5b1",
                  options: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Dropdown</h1>

      <div style={{ display: "flex" }}>
        <DropdownMenu options={dropdownMenuOptions} initialValue={dropdownMenuOptions[0].value} />

        <Dropdown options={dropdownOptions} initialValue={dropdownOptions[0].value} />
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores assumenda fugiat est voluptatum cum,
        cupiditate repellat sunt doloremque eveniet, id earum ab sed? Ea architecto quia voluptatem dolor corrupti.
        Impedit optio adipisci libero in dolor nisi odit? Suscipit porro labore impedit voluptatem molestiae optio
        soluta ratione magnam, nobis libero nulla sit tenetur assumenda asperiores esse quaerat dignissimos delectus
        odio!
      </p>
    </div>
  );
}

export default App;
