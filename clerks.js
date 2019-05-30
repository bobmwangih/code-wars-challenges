function tickets(peopleInLine) {
    // ...
    var ticket25 = 0,
        ticket50 = 0;

    for (var i = 0; i < peopleInLine.length; i++) {
        switch (peopleInLine[i]) {
            case 25:
                ticket25++;
                break;
            case 50:
                ticket25 > 0 ? ticket25-- : ticket25 = -1;
                ticket50++;
                break;
            case 100:
                ticket25 > 0 && ticket50 > 0 ? ticket50-- : (ticket25 > 2 ? ticket25 -= 2 : ticket25 = -1);
                ticket25--;
                break;
        }
        if (ticket25 < 0) {
            return "NO";
        }
    }
    return "YES";
    ticket
}