// Memoised value for the users coordinates
let memoizedCoordinates: Coordinates;

export async function getLocation(force = false): Promise<Coordinates | null> {
  // Check if coordinates have already been cached
  // The force argument will refresh these values
  if (!force && !!memoizedCoordinates) {
    return memoizedCoordinates;
  }

  // Check for support
  if (!window.navigator.geolocation) {
    console.error('Geolocation not supported');
    return null;
  }

  try {
    memoizedCoordinates = await new Promise<Coordinates>((resolve, reject) => {
      // Use the geolocation provided by the browser
      window.navigator.geolocation
        .getCurrentPosition(
          ({ coords }) => {
            resolve(coords);
          },
          (error) => {
            reject(error);
          },
        );
    });
    return memoizedCoordinates;
  } catch (_error) {
    return null;
  }
}
