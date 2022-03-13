import Logo from "../components/Logo";
import Button from "../components/Button";
import Select from "../components/Select";
import TwoColTable from "../components/TwoColTable";
import { useState } from "react";

function Material() {
  const [category, setCategory] = useState("");
  const handleChange = e => {
    setCategory(e.target.value);
  };

  const [subState, setSubState] = useState(false);

  function onFormSubmit(e) {
    setSubState(true);
    e.preventDefault();
  }

  return (
    <div className="material">
      <header className="material-header">
        <h1 className="hidden">Material Manage</h1>
        <Logo />
      </header>
      <section className="material-category">
        <h2 className="hidden">카테고리 선택</h2>
        <form onSubmit={onFormSubmit}>
          <div className="main-category">
            <Select
              options={[
                "카테고리a",
                "카테고리b",
                "카테고리c",
                "카테고리d",
                "카테고리e",
              ]}
              onChange={handleChange}
            />
          </div>
          <div className="side-category">
            <Select options={["1", "2", "3", "4", "5"]} />
          </div>
          <Button text="검색" />
        </form>
      </section>
      <main className="material-content">
        <div>
          <h2>{category}</h2>
        </div>

        {subState ? (
          <section className="material-list">
            <TwoColTable
              tdata={{
                r1_c1: "품목",
                r1_c2: "개수",
                r2_c1: "2구 콘센트",
                r2_c2: "10개",
                r3_c1: "4구 콘센트",
                r3_c2: "10개",
                r4_c1: "6구 콘센트",
                r4_c2: "10개",
              }}
            />
            <Button text="저장" />
          </section>
        ) : null}
      </main>
    </div>
  );
}
export default Material;
