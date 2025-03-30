{
  document.writeln("(q10a)");
  const userFormula = document.getElementById("bonusFormula");
  const factor_ = parseFloat(document.getElementById("factor").value);

  const bonusCalculation = (employee) =>
    // const factor = _factor;
    eval(userFormula.value);
  const e = { revenue: 10000, bonus: null };
  bonusCalculation(e);
  document.writeln(e.bonus);
  document.writeln(e.bonus === e.revenue * factor_);
}
{
  document.writeln("(q10b)");

  const userFormula = document.getElementById("bonusFormula2");

  const bonusCalculation = Function(
    "employee",
    "employee.bonus = " + userFormula.value + "; return employee.bonus",
  );
  const e = { revenue: 10000, bonus: null };
  bonusCalculation(e);
  document.writeln(e.bonus);
  document.writeln(e.bonus === e.revenue * 0.2);
}
