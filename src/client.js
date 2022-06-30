import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "gj189huu", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  token: 'skXbD95SKumaHlbXDa5bn95tpNpQegWhsQYzX9o4fT76BwTbc9oqHsTUJMLQKssgcWbMvTXSDRKwm36Pdf7jd3UicBP3nSqXWzZSs6iIdEmeIXupcpkmNbRZKkhqX491HoP6Xtt6Ulom30tDm68jhXzbjf8Idh1qr9cmAVnVvDFhbSbeFRbZ'
});