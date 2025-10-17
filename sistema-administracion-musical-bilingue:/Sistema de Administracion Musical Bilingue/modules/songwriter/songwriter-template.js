export function getSongwriterTemplate(data) {
    return `
SONGWRITER AGREEMENT

Effective Date: ${data.date}

BETWEEN:

${data.publisher} (the "Publisher")

AND:

${data.writer} (the "Songwriter")

1. ENGAGEMENT
Publisher engages Songwriter to write, compose, and deliver original musical 
compositions during the Term of this Agreement.

2. TERM
Initial term of one (1) year with options to extend.

3. DELIVERY COMMITMENT
Songwriter agrees to deliver a minimum of ${data.minimum} newly created and completed 
compositions per year during the Term.

4. GRANT OF RIGHTS
Songwriter hereby assigns to Publisher 100% of the Publisher's Share of copyright 
in all Compositions created during the Term worldwide in perpetuity.

5. ROYALTIES
Songwriter shall receive ${data.royalty}% of the Writer's Share of all income derived 
from the Compositions, calculated as follows:

- Performance Royalties: ${data.royalty}% of writer's share
- Mechanical Royalties: ${data.royalty}% of writer's share  
- Synchronization Fees: ${data.royalty}% of writer's share
- Print Income: ${data.royalty}% of writer's share

6. ACCOUNTING AND PAYMENT
Publisher shall account quarterly within 45 days after quarter end.
Payment shall accompany each statement.

7. CREATIVE CONTROL
Songwriter retains approval rights over:
- Major changes to compositions
- Synchronization uses in commercials/political campaigns
- Sampling by third parties

8. EXCLUSIVITY
During the Term, Songwriter agrees to write exclusively for
Publisher.
Songwriter shall not enter into any conflicting agreements.

9. WARRANTIES
Songwriter warrants that:
- All compositions will be original works
- Songwriter owns all rights to deliver compositions
- Compositions will not infringe any third party rights
- Songwriter has authority to enter this agreement

10. REVERSION
If a composition is not commercially exploited within 24 months,
Songwriter may request reversion of rights in writing.

11. TERMINATION
Either party may terminate with 60 days written notice after initial term.

AGREED AND ACCEPTED:

_________________________________    Date: ______________
${data.publisher}
Publisher


_________________________________    Date: ______________
${data.writer}
Songwriter

Signature: _______________________
`;
}