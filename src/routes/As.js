import Logo from "../components/Logo";
import Button from "../components/Button";
import Place from "../components/Place";

function As() {
  const onFormSubmit = e => {
    e.preventDefault();
    // .checked 이면 삭제하는 로직
  };
  return (
    <main className="as">
      <header>
        <h1 className="hidden">As 내역</h1>
        <Logo />
        <div>
          <h2>개소명</h2>
        </div>
      </header>
      <section className="as-list">
        <form onSubmit={onFormSubmit}>
          <Place apart="A아파트" address="101동 0000호" />
          <Place apart="B아파트" address="102동 0000호" />
          <Place apart="C아파트" address="103동 0000호" />
          <Place apart="D아파트" address="104동 0000호" />
          <Place apart="E아파트" address="105동 0000호" />
          <Place apart="F아파트" address="106동 0000호" />
          <Place apart="G아파트" address="107동 0000호" />
          <Button text="삭제" />
        </form>
      </section>
    </main>
  );
}
export default As;
