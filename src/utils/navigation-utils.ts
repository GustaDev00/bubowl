// Import only the navigation data without React dependencies
import C from "@/config/constants";

export function getNavigationLinks(type: "pt" | "en" | "es" = "pt") {
  try {
    // Only access the navigation data directly
    return C[type].data.navigation.content || [];
  } catch (error) {
    console.error("Error accessing navigation data:", error);
    return [];
  }
}
