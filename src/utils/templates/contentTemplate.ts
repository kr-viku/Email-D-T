export const contentTemplate = `
<table style="width: 600px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px;" cellspacing="0" cellpadding="20">
  <tr>
    <td style="padding: 0;">
      <div style="width: 100%; height: 6px; background-color: #625bff;"></div>
    </td>
  </tr>
  <tr>
    <td style="text-align: left;">
      {{#if logo}}
      <img src="{{logo}}" alt="Company Logo" style="max-width: 150px; max-height: 60px; vertical-align: middle;" />
      {{/if}}
    </td>
  </tr>
  <tr>
    <td style="color: #333333; font-size: 16px; line-height: 1.5;">
      <p style="margin: 0;">Hi {{recipientName}} 👋</p>
      <br />
      <div style="margin: 0;">{{message}}</div>
    </td>
  </tr>
  <tr>
    <td>
      <a href="{{ctaLink}}" style="
          display: inline-block;
          padding: 12px 20px;
          color: #625bff;
          text-decoration: none;
          font-weight: bold;
          border: 1px solid #625bff;
          border-radius: 5px;
        ">{{ctaText}}</a>
    </td>
  </tr>
  <tr>
    <td style="text-align: left;">
      <p style="margin: 0 0 8px 0;">{{signature}}</p>
      <div style="font-size: 12px; color: #888888; margin-top: 20px;">
        <p style="margin: 0;">{{companyName}}</p>
        <p style="margin: 8px 0; white-space: pre-line;">{{companyAddress}}</p>
        <a href="#" style="color: #625bff; text-decoration: none;">Unsubscribe</a>
      </div>
    </td>
  </tr>
</table>
`;