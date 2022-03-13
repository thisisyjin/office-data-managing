function TwoColTable({ tdata }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{tdata.r1_c1}</th>
            <th>{tdata.r1_c2}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tdata.r2_c1}</td>
            <td>{tdata.r2_c2}</td>
          </tr>
          <tr>
            <td>{tdata.r3_c1}</td>
            <td>{tdata.r3_c2}</td>
          </tr>
          <tr>
            <td>{tdata.r4_c1}</td>
            <td>{tdata.r4_c2}</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default TwoColTable;
