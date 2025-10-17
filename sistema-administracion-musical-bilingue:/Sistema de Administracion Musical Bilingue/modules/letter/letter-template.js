export function getLetterTemplate(data) {
    return `
LETTER OF DIRECTION

Date: ${data.date}

TO:      ASCAP / BMI / SESAC / The Mechanical Licensing Collective
         [PRO Address]

FROM:    ${data.writer}
         ${data.address}

RE:      Direction of Payment for Musical Compositions

Dear Sirs/Madams:

I, ${data.writer}, am a songwriter and composer who owns and controls certain 
musical compositions registered with your organization.

CURRENT PRO AFFILIATION: ${data.pro}

I hereby direct and authorize your organization to pay all royalties, fees, 
and any other monies due to me from my musical compositions directly to:

         ${data.publisher}
         [Publisher Address]
         [Publisher Tax ID: _______________]

This direction shall apply to:

☑ All performance royalties
☑ All mechanical royalties  
☑ All digital streaming royalties
☑ All synchronization fees
☑ All other income derived from my compositions

SCOPE:
This Letter of Direction applies to all compositions currently registered 
with your organization under my name, as well as any future compositions 
I may register during the term of my agreement with ${data.publisher}.

TERM:
This direction shall remain in effect until revoked by me in writing.

AUTHORITY:
I confirm that I have full authority to issue this direction and that 
${data.publisher} is authorized to act as my administrator and collect all 
payments on my behalf pursuant to our Administration Agreement dated ${data.date}.

CONTACT INFORMATION:
For any questions regarding this direction, please contact:

${data.publisher}
Email: [publisher email]
Phone: [publisher phone]

I request that you acknowledge receipt of this Letter of Direction and 
update your payment records accordingly.

Thank you for your cooperation.

Sincerely,


_________________________________
${data.writer}
Songwriter/Composer

Social Security Number / Tax ID: _________________
Date of Birth: _________________


ACKNOWLEDGMENT (Optional - some PROs require notarization):

State of ________________
County of _______________

Subscribed and sworn to before me this _____ day of __________, 20____.


_________________________________
Notary Public
My Commission Expires: ___________
`;
}