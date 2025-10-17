export function getPublishingTemplate(data) {
    return `
MUSIC PUBLISHING AGREEMENT

This ${data.type} Agreement is entered into as of ${data.date}

BETWEEN:

${data.publisher} (the "Publisher")

AND:

${data.writer} (the "Writer")

RECITALS:
Writer has created and will create musical compositions.
Publisher desires to publish and exploit said compositions.

TERMS:

1. GRANT OF RIGHTS
Writer hereby assigns, transfers, and grants to Publisher ${data.share}% of the worldwide 
copyright and publishing rights in all Compositions created during the Term.

2. PUBLISHING SHARES
Publisher Share: ${data.share}%
Writer Share: ${100 - parseInt(data.share)}%

3. ROYALTY DISTRIBUTION
All income shall be divided as follows:
- Performance Royalties: Split per above shares
- Mechanical Royalties: Split per above shares
- Synchronization Fees: Split per above shares
- Print Income: Split per above shares

4. PUBLISHER'S OBLIGATIONS
Publisher agrees to:
- Register all compositions with appropriate PROs
- Exploit compositions commercially
- Pay Writer their share within 45 days of receipt
- Provide quarterly royalty statements
- Protect copyright and pursue infringements

5. WRITER'S WARRANTIES
Writer represents and warrants:
- Writer is sole author of compositions
- Compositions are original and do not infringe third party rights
- Writer has full right to enter this agreement
- No conflicting agreements exist

6. TERM
Initial term of 3 years from Effective Date, with automatic renewal options.

7. REVERSION
If Publisher fails to commercially exploit a composition within 2 years,
rights in that composition shall revert to Writer upon written request.

8. ACCOUNTING
Publisher shall provide quarterly statements showing all income and deductions.

AGREED AND ACCEPTED:

_________________________________    Date: ______________
${data.publisher}
Publisher


_________________________________    Date: ______________
${data.writer}
Writer

Signature: _______________________
`;
}