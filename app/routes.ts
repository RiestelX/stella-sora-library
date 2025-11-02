import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("trekker", "routes/trekker.tsx"),
  route("trekker/:id", "routes/trekkerDetail.tsx"),
  route("disc", "routes/disc.tsx"),
  route("guide", "routes/guide.tsx"),
  route("tier-list", "routes/tierlist.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
