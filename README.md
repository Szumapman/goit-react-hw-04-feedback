# Zadanie domowe #2.1 - React

## Widget odpowiedzi
Jak większość firm, kawiarnia Expresso zbiera feedback od swoich klientów. Twoim zadaniem jest stworzenie aplikacji dla zbierania statystyk. Są tylko trzy warianty odpowiedzi: dobry, neutralny, zły.

### Krok 1
Aplikacja powinna wyświetlać ilość zebranych odpowiedzi dla każdej kategorii. Aplikacja nie powinna przechowywać statystyk odpowiedzi między różnymi sesjami (odświeżenie strony).

Stan aplikacji obowiązkowo powinien wyglądać następująco, nie można dodawać nowych właściwości:
```
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```
### Krok 2
Rozszerz funkcjonalność aplikacji tak, aby w interfejsie wyświetlało się więcej statystyk o zebranych odpowiedziach. Dodaj wyświetlanie ogólnej ilości zebranych odpowiedzi ze wszystkich kategorii i procent pozytywnych odpowiedzi. W tym celu utwórz metody pomocnicze countTotalFeedback() i countPositiveFeedbackPercentage() podliczające te wartości, bazując na danych w stanie (obliczane dane).

### Krok 3
Wykonaj refaktor aplikacji. Stan aplikacji powinien zostawać w komponencie root <App>.

* Przenieś wyświetlanie statystyk do oddzielnego komponentu `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.
* Przenieś blok przycisków do komponentu `<FeedbackOptions options={} onLeaveFeedback={}>`.
* Utwórz komponent `<Section title="">`, który renderuje sekcję z nagłówkiem i dziećmi (children). Zamień każdy z `<Statistics>` i `<FeedbackOptions>` w utworzony komponent sekcji.

### Krok 4
Rozszerz funkcjonalność aplikacji tak, aby blok statystyk renderował się dopiero po otrzymaniu przynajmniej jednej odpowiedzi. Wiadomość o braku statystyk przenieś do komponentu `<Notification message="There is no feedback">`.
