export function getAdminTemplate(data) {
    return `
MUSIC ADMINISTRATION AGREEMENT

This Agreement is entered into as of ${data.date} (the "Effective Date")

BETWEEN:

${data.publisher} (the "Administrator")

AND:

${data.writer} (the "Composer")

WHEREAS, Composer owns and controls certain musical compositions;

WHEREAS, Administrator desires to administer the Compositions on behalf of Composer;

NOW, THEREFORE, in consideration of the mutual covenants contained herein:

1. GRANT OF RIGHTS
Composer hereby grants to Administrator the exclusive right to administer, license, 
collect, and enforce all rights in the Compositions throughout the Territory (${data.territory}).

2. TERM
This Agreement shall commence on the Effective Date and continue for ${data.term} years.

3. ADMINISTRATION COMMISSION
Administrator shall retain ${data.commission}% of all gross receipts collected as its 
administration fee. The remaining balance shall be paid to Composer.

4. ADMINISTRATOR'S DUTIES
Administrator shall:
- Register all Compositions with performing rights organizations (ASCAP, BMI, SESAC)
- Register with The Mechanical Licensing Collective (The MLC)
- Collect all mechanical, performance, synchronization royalties
- Issue licenses on behalf of Composer
- Provide quarterly accounting statements
- Pursue infringement claims when necessary

5. COMPOSER'S WARRANTIES
Composer represents and warrants that:
- Composer is the sole author and owner of the Compositions
- The Compositions are original works
- No third party claims exist on the Compositions
- Composer has full authority to enter into this Agreement

6. ACCOUNTING
Administrator shall provide quarterly statements within 45 days after each quarter end.
Payment shall accompany each statement.

7. TERMINATION
Either party may terminate with 90 days written notice. Upon termination, 
Administrator shall complete all pending licenses and remit final payment.

8. GENERAL PROVISIONS
This Agreement constitutes the entire agreement between the parties.
This Agreement shall be governed by the laws of the State of New York.

AGREED AND ACCEPTED:

_________________________________    Date: ______________
${data.publisher}
Administrator


_________________________________    Date: ______________
${data.writer}
Composer

Signature: _______________________
`;
}