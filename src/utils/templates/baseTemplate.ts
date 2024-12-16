export const baseTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <title>Email Template</title>
  </head>
  <body style="font-family: CircularXX, Circular Pro,Helvetica Neue,Arial,sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">
    <table style="width: 100%; background-color: #f9f9f9; padding: 20px;" cellspacing="0" cellpadding="0" align="center">
      <tr>
        <td align="center">
          {{content}}
        </td>
      </tr>
    </table>
  </body>
</html>
`;